using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mailer.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ACBLNumber { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Note { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Cell { get; set; }
        public List<Property> Properties { get; set; }
    }
}
