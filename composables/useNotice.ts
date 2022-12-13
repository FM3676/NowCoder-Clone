export interface Message {
  message: {
    conversationId: string;
    createTime: string;
    fromId: number;
    fromUserName: string;
    id: number;
    status: number;
    toId: number;
  };
  unread: number;
}

export interface NoticeData {
  comment: Message;
  follow: Message;
  like: Message;
}

export default () => {
  const useNotices = () => useState<NoticeData>("notices");

  const setNotices = (notice: NoticeData) => {
    useNotices().value = notice;
  };

  const getNoltices = withPromiseTryCatch(async () => {
    const token = useAuth().useAuthToken().value;
    const { data } = await $fetch("/api/Notice/getLatestNotice", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  })<NoticeData>;
  return { getNoltices, setNotices, useNotices };
};
