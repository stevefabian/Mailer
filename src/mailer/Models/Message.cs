using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mailer.Models
{
    public class Message
    {
        public int Id { get; set; }
        public bool Sent { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public DateTime DateSent { get; set; }
        public List<string> History { get; set; }
    }
}
