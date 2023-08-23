import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../../components";
import { projects } from "../../data/projects";
import NotFound from "../NotFound/NotFound";
import { BASE_URL } from "../../utils/consts";
import Masonry from "react-masonry-css";

const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

function Album() {
  const location = useLocation();
  const endpoint = location.pathname.split("/");
  const album_id = endpoint[endpoint.length - 1];

  // Find the project based on album_id
  const project = projects.find((work) => work.endpoint === album_id);

  if (!project) return <NotFound />;

  return (
    <>
      <Header activeNavbar={false} />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-10 md:px-[15%] mb-20"
      >
        <div className="px-4">
          <h1 className="text-3xl font-semibold mb-4 mt-10 text-orange-200">{project.title}</h1>
          <p className="text-lg mb-10">{project.description}</p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto"
          columnClassName="m-0 p-0"
          >
          {project.images.map((image, index) => (
            <motion.a
              key={index}
              href={`${BASE_URL}album/${project.endpoint}/${image}.jpg`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <motion.img
                src={`${BASE_URL}album/${project.endpoint}/${image}.jpg`}
                alt={`Image ${index + 1} - ${image}`}
                className="rounded-3xl p-2"
                whileHover={{ scale: 0.95, opacity: 0.8 }}
              />
            </motion.a>
          ))}
        </Masonry>
      </motion.main>
    </>
  );
}

export default Album;
