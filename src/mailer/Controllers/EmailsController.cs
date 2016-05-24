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
            new Message { Id=1, Subject="This is my very first message", DateSent=new DateTime(2016,5,16,9,26,00).ToUniversalTime(), Sent=true },
            new Message { Id=2, Subject="Another Test Message", DateSent=new DateTime(2016,5,14,11,15,08).ToUniversalTime() },
            new Message { Id=3, Subject="Testing Message History in a Grid", DateSent=new DateTime(2016,4,28,15,2,12).ToUniversalTime() }
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
