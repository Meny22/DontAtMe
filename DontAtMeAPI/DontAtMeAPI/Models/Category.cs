using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DontAtMeAPI.Models
{
    public class Category
    {
        private int id;
        private string name;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }

        public Category(int id, string name)
        {
            this.id = id;
            this.name = name;
        }


    }
}