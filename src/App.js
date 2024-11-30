import { useState } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import Modal from "./components/Modal";
import { DUMMY_NEWS } from "./lib/news";

const App = () => {
  const [articles, setArticles] = useState(DUMMY_NEWS);
  const [editingArticle, setEditingArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addArticle = (article) => {
    setArticles([...articles, { ...article, id: Date.now() }]);
  };

  const updateArticle = (updatedArticle) => {
    setArticles(
      articles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
    setIsModalOpen(false);
    setEditingArticle(null);
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const openEditModal = (article) => {
    setEditingArticle(article);

    setIsModalOpen(true);
  };

  return (
    <div className="m-10">
      <h1 className="font-bold text-6xl mb-8 text-center">CRUD News App</h1>

      <button
        className="text-green-300 text-3xl border rounded-xl border-green-300 hover:text-white hover:bg-green-300 p-7 ml-10"
        onClick={() => {
          setIsModalOpen(true);
          setEditingArticle(null);
        }}
      >
        Add News
      </button>
      <ArticleList
        articles={articles}
        deleteArticle={deleteArticle}
        editArticle={openEditModal}
      />
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ArticleForm
            addArticle={addArticle}
            updateArticle={updateArticle}
            editingArticle={editingArticle}
            onClose={setIsModalOpen}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
