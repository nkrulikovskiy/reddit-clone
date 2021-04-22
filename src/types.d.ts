 type PostColorProps = {
  portfolio: string;
  codeReview: string;
  helpWanted: string;
  discussion: string;
};

type PostCategory = {
    title:string;
  postType: keyof PostColorProps;

}
 type PostType = {
  title: string;
  passedTime: string;
  poster: string;
  externalLink?: string;
  postCategory:PostCategory;
  voteCnt: number;
}