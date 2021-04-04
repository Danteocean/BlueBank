using System;
using System.Collections.Generic;

#nullable disable

namespace BackBlueBank.Models
{
    public partial class Cuenta
    {
        public long Id { get; set; }
        public long Monto { get; set; }
        public long IdClientes { get; set; }

        public virtual Cliente IdClientesNavigation { get; set; }
    }
}
