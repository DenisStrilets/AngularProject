using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModels.Models
{
  public class RegistrationViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public bool Exist { get; set; }
    }
}
