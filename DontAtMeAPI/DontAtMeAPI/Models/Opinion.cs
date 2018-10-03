using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DontAtMeAPI.Models
{
    public class Opinion
    {
        private string _body;
        private DateTime _date_created;
        private string _response;
        private int _likes;
        private int _dislikes;
        public string body { get => _body; set => _body = value; }
        public DateTime date_created { get => _date_created; set => _date_created = value; }
        public string response { get => _response; set => _response = value; }
        public int likes { get => _likes; set => _likes = value; }
        public int dislikes { get => _dislikes; set => _dislikes = value; }

        public Opinion(string body, DateTime date_created, string response, int likes, int dislikes)
        {
            this._body = body;
            this._date_created = date_created;
            this._response = response;
            this._likes = likes;
            this._dislikes = dislikes;
        }

    }
}