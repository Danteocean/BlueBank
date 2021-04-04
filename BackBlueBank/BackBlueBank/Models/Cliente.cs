using System;
using System.Collections.Generic;

#nullable disable

namespace BackBlueBank.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Cuenta = new HashSet<Cuenta>();
        }

        public long Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Usuario { get; set; }
        public string Pass { get; set; }

        public virtual ICollection<Cuenta> Cuenta { get; set; }
    }
}
