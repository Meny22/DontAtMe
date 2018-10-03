using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DontAtMeAPI.Models
{
    public class Topic
    {
        private int _topic_id;
        private string _topic_title;
        private string _date_created;
        private Category category;
        private List<string> tags;
        //private List<Opinion> responses;

        public int topic_id { get => _topic_id; set => _topic_id = value; }
        public string topic_title { get => _topic_title; set => _topic_title = value; }
        public string date_created { get => _date_created; set => _date_created = value; }
        public Category Category { get => category; set => category = value; }
        public List<string> Tags { get => tags; set => tags = value; }
        //public List<Opinion> Responses { get => responses; set => responses = value; }

        public Topic(string topic_title, string date_created, Category category, List<string> tags)
        {
            this._topic_title = topic_title;
            this._date_created = date_created;
            this.category = category;
            this.tags = tags;
            //responses = new List<Opinion>();
        }

    }
}