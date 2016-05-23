using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mailer.Models;

namespace mailer.Controllers
{
    [Route("api/[controller]")]
    public class EmailsController : Controller
    {
        private static readonly List<Message> Messages= new List<Message>
        {
            new Message { Id=1, Subject="Test Message 1" },
            new Message { Id=2, Subject="Test Message 2" },
            new Message { Id=3, Subject="Test Message 3" }
        };

        // GET api/values
        [HttpGet]
        public IEnumerable<Message> Get()
        {
            return Messages;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return Messages.FirstOrDefault(p => p.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Message value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Message value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
