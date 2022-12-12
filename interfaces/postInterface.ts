export interface Post {
  commentCount: number;
  content: string;
  createdTime: string;
  createTime: string;
  headerUrl: string;
  id: number;
  like: boolean;
  liked: number;
  score: number;
  status: number;
  title: string;
  type: number;
  userId: string;
  username: string;
}

export interface Comment {
  content: string;
  createBy: number;
  createTime: string;
  entityId: number;
  headUrl: string;
  id: number;
  rootId: number;
  toCommentId: number;
  toCommentUserId: number;
  toCommentUserName: string;
  username: string;
}

export interface FirstLevelComment extends Comment {
  children?: Comment[];
}
