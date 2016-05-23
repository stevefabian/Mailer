using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mailer.Models;

namespace mailer.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private static readonly List<Person> People = new List<Person>
        {
            new Person { Id=1, FirstName="Debi", LastName="Fabian" },
            new Person { Id=2, FirstName="Steve", LastName="Fabian" }
        };

        // GET api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return People;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return People.FirstOrDefault(p => p.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Person value)
        {
            People.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Person value)
        {
            var thisPerson = People.FirstOrDefault(p => p.Id == id);
            if (thisPerson != null)
            {
                thisPerson = value;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var thisPerson = People.FirstOrDefault(p => p.Id == id);
            if (thisPerson != null)
            {
                People.Remove(thisPerson);
            }
        }
    }
}
