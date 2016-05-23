using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mailer.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }
        public List<Person> Members { get; set; }
        public List<Message> Messages { get; set; }
    }
}
