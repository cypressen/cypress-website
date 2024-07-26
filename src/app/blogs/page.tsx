"use server";

const getData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  //  const resp = await fetch("xx",{next:{revalidate:3600}}); 第二个next:{revalidate:3600}是缓存时间 每3600秒更新一次
  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  return await resp.json();
};

const BlogsHomePage = async () => {
  const posts = await getData();
  return (
    <div>
      <h1>Blogs Home Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2 className="text-red-500">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogsHomePage;
