import { useParams } from "react-router-dom"
import { formatDate, getCategoryLogo } from "../../utils/main";
import twitterblogicon from "../../assets/icons/twitterblog.svg";
import fbblogicon from "../../assets/icons/fbblog.svg";
import linkedinblogicon from "../../assets/icons/linkedinblog.svg";
import linkblogicon from "../../assets/icons/linkblog.svg";
import { useEffect } from "react";
import BlogCard from "../../components/cards/verticalblog";

const NewsSlug = () => {
    
    const {id} = useParams();
    useEffect(()=> {
        console.log(id)
    }, [id])
    
    const articledetails = {
        id: 1,
        title: "A Developer's Primer to TON Ecosystem",
        content: "This is the content of article 1",
        date: "2022-01-01",
        category: "news",
        time: "2 min",
        img: "src/assets/images/blog.png",
        companylogo: "src/assets/icons/companyLogo.svg",
        company: "TON Innovators",
        companysocials: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        },
    }
    
    const relatedposts = [
        {
            title:
              "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            date: "2021-08-12",
            category: "news",
            image: "https://placehold.it/600x400",
            estimated_time: "5 min read",
            companylogo: "src/assets/icons/companyLogo.svg",
            company: "Funding Factory"
          },
          {
            title: "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            date: "2021-08-12",
            category: "news",
            image: "https://placehold.it/600x400",
            estimated_time: "5 min read",
            companylogo: "src/assets/icons/companyLogo.svg",
            company: "Funding Factory"
          }
    ]
    
  return (
    <article className="max-w-[736px] mx-auto">
        <header>
            <div className="flex gap-2 items-center text-gray-dark">
                <p>{formatDate(articledetails.date)}</p>
                <p className="text-[6px]">•</p>
                <p className="flex gap-1 items-center">
                <img src={getCategoryLogo(articledetails.category)} className="opacity-60" />
                {articledetails.category}
                </p>
                <p className="text-[6px]">•</p>
                <p>{articledetails.time} read</p>
            </div>
            <h1 className="font-bold text-3xl sm:text-5xl my-6">{articledetails.title}</h1>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <img src={articledetails.companylogo} className="" />
                    <p className="sm:font-semibold text-[#D5D5D8]">{articledetails.company}</p>
                </div>
                <div className="flex gap-2">
                    <a href={articledetails.companysocials.twitter}>
                        <img src={twitterblogicon} />
                    </a>
                    <a href={articledetails.companysocials.facebook}>
                        <img src={fbblogicon} />
                    </a>
                    <a href={articledetails.companysocials.linkedin}>
                        <img src={linkedinblogicon} />
                    </a>
                    <a href={articledetails.companysocials.instagram}>
                        <img src={linkblogicon} />
                    </a>
                </div>
            </div>
        </header>
        <div className="w-full h-auto border border-gray-darker rounded-3xl my-8">
            <img src={articledetails.img} alt="" className="w-full h-full object-cover rounded-[26px]" />
        </div>
        <main className="blog_body">
            <p>
                This primer goes beyond <a href="#">technical jargon</a> and complex whitepapers. Our goal is to
                introduce you to blockchain through the emotions and unique experiences that TON
                brings to its users, including you, as a developer looking to get started with
                blockchain.
            </p>
            <h2>The unmatched experience</h2>
            <p>
                This primer goes beyond technical jargon and complex whitepapers. Our goal is to
                introduce you to blockchain through the emotions and unique experiences that TON
                brings to its users, including you, as a developer looking to get started with
                blockchain.
            </p>
        </main>
        <hr className="mt-10 mb-4 border-gray-darker" />
        <footer className="space-y-20">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src="/logo.png" alt=""/>
                    <p className="font-semibold">Funding Factory</p>
                </div>
                <div className="flex gap-2">
                    <a href="#">
                        <img src={twitterblogicon} alt="" />
                    </a>
                    <a href="#">
                        <img src={fbblogicon} alt="" />
                    </a>
                    <a href="#">
                        <img src={linkedinblogicon} alt="" />
                    </a>
                    <a href="#">
                        <img src={linkblogicon} alt="" />
                    </a>
                </div>
            </div>
            <div className="space-y-8">
                <h2 className="text-[32px] font-bold">Related Posts</h2>
                <div className="flex gap-6 flex-wrap gap-y-12">
                    {
                        relatedposts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))
                    }
                </div>
            </div>
        </footer>
    </article>
  )
}

export default NewsSlug
