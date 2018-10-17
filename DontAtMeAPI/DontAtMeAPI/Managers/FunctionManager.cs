using DontAtMeAPI.Database;
using DontAtMeAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DontAtMeAPI.Managers
{
    public class FunctionManager
    {
        private DatabaseConnector databaseConnector = new DatabaseConnector();
        public bool AddTopic(Topic topic)
        {
            databaseConnector.AddTopic(topic);
            return true;
        }

        public bool AddOpinionForTopic(int topic_id, Opinion opinion)
        {
            databaseConnector.AddOpinionForTopic(topic_id, opinion);
            return true;
        }

        public List<Opinion> GetOpinionsForTopic(int id)
        {
            return databaseConnector.GetOpinionsForTopic(id);
        }

        public List<Topic> GetAllTopics()
        {
            return databaseConnector.GetTopics();
        }

        public Topic GetTopicWithId(int id)
        {
            return databaseConnector.GetTopicById(id);
        }

        public List<Category> GetAllCategories()
        {
            return databaseConnector.GetAllCategories();
        }
    }
}