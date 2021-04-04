using BackBlueBank.Class;
using BackBlueBank.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackBlueBank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public LoginController(AplicationDbContext context)
        {
            _context = context;
        }


       
        // GET api/<LoginController>/5
        [HttpGet]
        public ActionResult Get(string NombreUsuario, string pass)
        {
            NombreUsuario = NombreUsuario.ToUpper();
            Encriptar encriptar = new Encriptar();
            Cliente cliente = new Cliente();
            cliente.Usuario = NombreUsuario;
            cliente.Pass = pass;

            String consena = encriptar.SHA256_Certificado(pass);

            AplicationDbContext db = new AplicationDbContext();
            string bdnombre = "";
            string bdPasword = "";

            long[] datosUsuario = new long[1];
            var consulta = from a in db.Clientes
                           where a.Usuario.Contains(NombreUsuario)
                           select a;
            foreach (var a in consulta)
            {
                bdnombre = a.Usuario;
                bdPasword = a.Pass;
                datosUsuario[0] = (long)a.Id;
          
             
            }
            if (NombreUsuario == bdnombre)
            {
                if (consena == bdPasword)
                {

                    /*HttpContext.Session.["Sesion_User_Mos"] = NombreUsuario;*/
                    return Ok(datosUsuario);
                }
                else
                    return BadRequest("Contraseña de red incorrecta");
            }

            return BadRequest("Usuario de red no existe");
        }

        // POST api/<LoginController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
