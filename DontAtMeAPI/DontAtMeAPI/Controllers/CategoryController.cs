using DontAtMeAPI.Managers;
using DontAtMeAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace sol.Controllers
{
    public class CategoryController : ApiController
    {
        private FunctionManager manager = new FunctionManager();
        [HttpGet]
        [Route("api/category/all")]
        public List<Category> GetAllCategories()
        {
            return manager.GetAllCategories();
        }
    }
}