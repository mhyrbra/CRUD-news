import { useState, useEffect } from "react";

const ArticleForm = ({
  addArticle,
  updateArticle,
  editingArticle,
  onClose,
}) => {
  const [article, setArticle] = useState({ title: "", description: "" });

  useEffect(() => {
    if (editingArticle) setArticle(editingArticle);
  }, [editingArticle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingArticle) {
      updateArticle(article);
    } else {
      addArticle(article);
    }
    setArticle({ title: "", description: "" });
    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 mb-4">
      <input
        id="title"
        className="leading-10"
        type="text"
        placeholder="Title"
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
        required
      />
      <textarea
        id="description"
        className="min-h-48"
        placeholder="Description"
        value={article.description}
        onChange={(e) =>
          setArticle({ ...article, description: e.target.value })
        }
        required
      ></textarea>
      <button
        type="submit"
        className="border border-white rounded-2xl p-6 self-center hover:bg-white hover:text-black"
      >
        {editingArticle ? "Update" : "Add"} Article
      </button>
    </form>
  );
};

export default ArticleForm;
