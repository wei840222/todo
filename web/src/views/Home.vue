<template lang="pug">
van-loading(v-if="currentUserLoading || listMessagesLoading", style="text-align: center; margin-top: 10px") Loading...
van-cell(v-else, v-for="(msg, i) in messages", :key="msg.id")
  template(#title)
    van-image(:src="msg.user.avatarUrl" width="30px" height="30px" round @click="onImageClicked(msg.user.avatarUrl)")
    van-tag(plain type="success" style="margin-left: 5px; padding-top: 1px;") {{ msg.user.name }}
  div(style="padding-top: 7px;") {{ msg.text }}
van-cell(v-for="(msg, i) in messagesCreated", :key="msg.id")
  template(#title)
    van-image(:src="msg.user.avatarUrl" width="30px" height="30px" round @click="onImageClicked(msg.user.avatarUrl)")
    van-tag(plain type="success" style="margin-left: 5px; padding-top: 1px;") {{ msg.user.name }}
  div(style="padding-top: 7px;") {{ msg.text }}
#message-end
van-sticky(v-if="!currentUserLoading && !listMessagesLoading" :offset-bottom="0" position="bottom")
  van-field(v-model="createMessageState" size="small" placeholder="please input message" clickable autofocus)
    template(#button)
      van-button(size="small" icon="comment-o" :loading="createMessageLoading" :disabled="createMessageState.trim() === ''" @click="createMessage") Send
</template>

<script>
import { ref, watch } from "vue";
import {
  useQuery,
  useResult,
  useMutation,
  useSubscription,
} from "@vue/apollo-composable";
import gql from "graphql-tag";
import jump from "jump.js";
import { ImagePreview } from "vant";

const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      name
      avatarUrl
    }
  }
`;

const LIST_MESSAGES = gql`
  query listMessages {
    messages {
      id
      text
      createdAt
      user {
        id
        name
        avatarUrl
      }
    }
  }
`;

const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!) {
    createMessage(input: { text: $text }) {
      id
      text
      createdAt
      user {
        id
        name
        avatarUrl
      }
    }
  }
`;

const ON_MESSAGE_CREATED = gql`
  subscription onMessageCreated {
    messageCreated {
      id
      text
      createdAt
      user {
        id
        name
        avatarUrl
      }
    }
  }
`;

export default {
  name: "Home",
  setup() {
    const { loading: currentUserLoading } = useQuery(CURRENT_USER);
    const {
      result: listMessages,
      loading: listMessagesLoading,
      onResult: onListMessages,
    } = useQuery(LIST_MESSAGES);
    const messages = useResult(listMessages, [], (data) => data.messages);
    const messagesCreated = ref([]);
    const createMessageState = ref("");

    const {
      mutate: createMessage,
      loading: createMessageLoading,
      onDone: onCreateMessageDone,
    } = useMutation(CREATE_MESSAGE, () => ({
      variables: {
        text: createMessageState.value,
      },
    }));
    onCreateMessageDone(() => (createMessageState.value = ""));

    const { result: onMessageCreated } = useSubscription(ON_MESSAGE_CREATED);

    watch(
      onMessageCreated,
      (data) => {
        messagesCreated.value.push(
          JSON.parse(JSON.stringify(data.messageCreated))
        );
        jump("#message-end");
      },
      {
        lazy: true,
      }
    );

    onListMessages(() => jump(window.innerHeight));

    const onImageClicked = (url) =>
      ImagePreview({
        images: [url],
        closeable: true,
        showIndex: false,
      });

    return {
      currentUserLoading,
      listMessagesLoading,
      messages,
      messagesCreated,
      createMessageState,
      createMessage,
      createMessageLoading,
      onImageClicked,
    };
  },
};
</script>
