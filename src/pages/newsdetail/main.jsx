import News2 from "./components/main"
import Description from "./components/description"
import CompanyDetail from "./components/CompanyDetail"
import RelatedPosts from "./components/RelatedPost"
import Posts from "./components/posts"

const NewsDetail = () => {
  return (
    
    <div>

    <div className="max-w-full sm:max-w-[736px] mx-auto">
      <News2 />
      <Description />
      <CompanyDetail />
      <RelatedPosts />
      <Posts />
    </div>
    </div>
  )
}

export default NewsDetail
