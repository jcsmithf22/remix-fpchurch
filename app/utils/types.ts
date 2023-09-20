import type { Timestamp } from "firebase/firestore";

export type Post = {
  title: string;
  date: Timestamp;
  id: string;
  hide: boolean;
  dateto: Timestamp;
  text: string;
};
