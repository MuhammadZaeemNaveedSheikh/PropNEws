import { useMemo } from "react";
import PrimaryBlogCard from "../../../../components/cards/primaryblog";
import BlogCard from "../../../../components/cards/verticalblog";

const News = () => {
  // const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [
      {
        title:
          "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
      },
      {
        title:
          "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
        companylogo: "src/assets/icons/companyLogo.svg",
        company: "TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
        company: "TON Innovators",
        companylogo: "src/assets/icons/companyLogo.svg",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
        companylogo: "src/assets/icons/companyLogo.svg",
        company: "TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
        companylogo: "src/assets/icons/companyLogo.svg",
        company: "TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/blog.png",
        estimated_time: "5 min read",
        companylogo: "src/assets/icons/companyLogo.svg",
        company: "TON Innovators",
      },
    ];
  }, []);

  return (
    <section className="space-y-24 md:space-y-8">
      <div className="flex lg:flex-nowrap flex-wrap m-5 gap-2 gap-y-10 justify-center items-center">
        <PrimaryBlogCard {...blogs[0]} />
        <PrimaryBlogCard {...blogs[1]} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 m-5">
        {blogs.map((blog2, index) => {
          if (index !== 0 && index !== 1)
            return <BlogCard key={index} {...blog2} />;
          return null;
        })}
      </div>
    </section>
  );
};

export default News;
