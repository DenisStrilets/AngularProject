using System;
using System.Collections.Generic;
using System.Text;

namespace BlogAngularProject8.DAL.Entities
{
   public class JobSeeker
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }  
        public string Location { get; set; }
    }
}
