import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { blogsSelector, LOAD_BLOGS } from "../../store/reducers/blogs.slice"
import Blog from "../Blog/Blog"

const Blogs = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(LOAD_BLOGS()), [])

  const blogs = useSelector(blogsSelector)
  return (
    <section className="mt-5">
      <h2
        style={{ fontWeight: 900 }}
        className="text-secondary text-center mt-5"
      >
        <i className="fas fa-upload"></i> RECENTLY PUBLISHED
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container  mt-5">
          {blogs.map(blog => (
            <Blog key={blog.key} blog={blog}>
              {" "}
            </Blog>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
