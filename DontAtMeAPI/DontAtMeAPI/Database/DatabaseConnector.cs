using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DontAtMeAPI.Models;
using MySql.Data.MySqlClient;

namespace DontAtMeAPI.Database
{
    public class DatabaseConnector
    {
        private const string CONNECTION_STRING = "server=localhost;user=root;database=data;port=3306;password=Metekia22";
        private MySqlConnection conn;
        public DatabaseConnector()
        {
           conn = new MySqlConnection(CONNECTION_STRING);
           ConnectDatabase();
        }

        private void ConnectDatabase()
        {
            try
            {
                conn.Open();
            }
            catch (InvalidOperationException e)
            {
                Console.Write(e.StackTrace);
            }
            catch(MySqlException t)
            {
                Console.Write(t.StackTrace);
            }
        }

        public void AddTopic(Topic topic)
        {
            MySqlCommand command = new MySqlCommand();
            string query = "Insert into topics(title,data_created,category_id) Values(@title,@date,@category)";
            command.Parameters.AddWithValue("@title", topic.topic_title);
            command.Parameters.AddWithValue("@date", topic.date_created);
            command.Parameters.AddWithValue("@category", topic.Category);
            command.Connection = conn;
            command.CommandText = query;
            command.ExecuteNonQuery();
        }

        public void AddOpinionForTopic(int topic_id, Opinion opinion)
        {
            MySqlCommand command = new MySqlCommand();
            string query = "Insert into opinions(topic_id,date_created,opinion,body,likes,dislikes) Values(@topic_id,@date,@opinion, @body, @likes, @dislikes)";
            command.Parameters.AddWithValue("@topic_id", topic_id);
            command.Parameters.AddWithValue("@date", opinion.date_created);
            command.Parameters.AddWithValue("@opinion", opinion.response.ToString());
            command.Parameters.AddWithValue("@body", opinion.body);
            command.Parameters.AddWithValue("@likes", opinion.likes);
            command.Parameters.AddWithValue("@dislikes", opinion.dislikes);
            command.Connection = conn;
            command.CommandText = query;
            command.ExecuteNonQuery();
        }

        public List<Opinion> GetOpinionsForTopic(int id)
        {
            List<Opinion> opinionsForTopic = new List<Opinion>();
            MySqlCommand command = new MySqlCommand();
            string query = "SELECT * FROM opinions WHERE topic_id=@topic_id";
            command.CommandText = query;
            command.Parameters.AddWithValue("@topic_id", id);
            command.Connection = conn;
            using(MySqlDataReader reader = command.ExecuteReader())
            {
                while(reader.Read())
                {
                    string body = reader.GetString("body");
                    DateTime date = reader.GetDateTime("date_created");
                    string response = reader.GetString("opinion");
                    int likes = reader.GetInt32("likes");
                    int dislikes = reader.GetInt32("dislikes");
                    Opinion opinionObject = new Opinion(body, date, response, likes, dislikes);
                    opinionsForTopic.Add(opinionObject);
                }
            }
            return opinionsForTopic;
        }

        public List<Topic> GetTopics()
        {
            MySqlCommand command = new MySqlCommand();
            string query = "SELECT * FROM topics";
            command.CommandText = query;
            command.Connection = conn;
            using (MySqlDataReader reader = command.ExecuteReader())
            {
                while (reader.HasRows)
                {
                    reader.NextResult();
                }
            }
            return null;
        }

        public Topic GetTopicById(int id)
        {
            MySqlCommand command = new MySqlCommand();
            string query = "SELECT * FROM topics WHERE topic_id = @topic_id";
            command.Parameters.AddWithValue("@topic_id", id);
            command.CommandText = query;
            command.Connection = conn;
            using (MySqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    int topic_id = reader.GetInt32("topic_id");
                    string title = reader.GetString("title");
                    DateTime dateTime = reader.GetDateTime("date_created");
                    Topic topic = new Topic(title, dateTime.ToString(), null, null);
                    return topic;
                }
            }
            return null;
        }
    }
}