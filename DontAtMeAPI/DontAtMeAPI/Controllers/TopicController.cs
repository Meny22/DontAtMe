using DontAtMeAPI.Managers;
using DontAtMeAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DontAtMeAPI.Controllers
{
    public class TopicController : ApiController
    {
        private FunctionManager manager = new FunctionManager();
        [HttpGet]
        [Route("api/topic/all")]
        public List<Topic> GetAllTopics()
        {
            return manager.GetAllTopics();
        }

        [HttpGet]
        [Route("api/topic/{id}")]
        public Topic GetTopicById(int id)
        {
            return manager.GetTopicWithId(id);
        }

        [HttpGet]
        [Route("api/topic/{id}/opinions")]
        public List<Opinion> GetOpinionsForTopic(int id)
        {
            return manager.GetOpinionsForTopic(id);
        }

        [HttpPost]
        [Route("api/topic/{id}/opinion")]
        public void AddOpinionForTopic(int id, [FromBody]Opinion opinion)
        {
            manager.AddOpinionForTopic(id, opinion);
        }

        [HttpPost]
        [Route("api/topic")]
        public void AddTopic([FromBody]Topic topic)
        {
            manager.AddTopic(topic);
        }
    }
}