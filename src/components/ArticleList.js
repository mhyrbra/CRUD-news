import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ArticleList = ({ articles, deleteArticle, editArticle }) => {
  return (
    <div>
      {articles.length === 0 ? (
        <p className="mt-10 ml-10">No articles available.</p>
      ) : (
        <table className="table-auto mt-16 border-collapse ">
          <thead>
            <tr>
              <th className="border-b-2 p-3">Title</th>
              <th className="border-b-2 p-3">Description</th>
              <th className="border-b-2 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="p-4 border-b-2 border-r-2">{article.title}</td>
                <td className="p-4 border-b-2 border-r-2 min-w-[30vw]">
                  {article.description}
                </td>
                <td className="text-3xl text-center p-3 border-b-2">
                  <button
                    className="mr-1 text-yellow-300"
                    onClick={() => editArticle(article)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="text-red-500"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ArticleList;
