export interface Comment {
  content: string;
  createBy: number;
  createTime: string;
  entityId: number;
  id: number;
  rootId: number;
  toCommentId: number;
  toCommentUserId: number;
  toCommentUserName?: string;
  username: string;
}

export interface FirstLevelComment extends Comment {
  children?: Comment[];
}
