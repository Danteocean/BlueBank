using BackBlueBank.Class;
using BackBlueBank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackBlueBank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ClienteController(AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<ClienteController>
        [HttpGet]
        public ActionResult<List<Cliente>> Get()
        {

            try
            {
                var listClientes = _context.Clientes.ToList();
                return Ok(listClientes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ClienteController>/5
        [HttpGet("{id}")]
        public ActionResult<Cliente> Get(long id)
        {
            try
            {
                var usuario = _context.Clientes.Find(id);
                if (usuario == null)
                {
                    return NotFound();
                }
                var nombre = usuario.Nombres + " " + usuario.Apellidos;
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ClienteController>
        [HttpPost]
        public ActionResult Post(long accion, [FromBody] Cliente usuario)
        {
            Encriptar encriptar = new Encriptar();
            if (accion == 0)
            {
                try
                {
                    String consena = encriptar.SHA256_Certificado(usuario.Pass);
                    usuario.Pass = consena;
                    usuario.Usuario=usuario.Usuario.ToUpper();
                    _context.Add(usuario);
                    _context.SaveChanges();
                    return Ok(usuario.Id);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            else
            {

                Put(accion, usuario);
                return Ok();
            }

        }

        // PUT api/<ClienteController>/5
        [HttpPut("{id}")]
        public ActionResult Put(long id, [FromBody] Cliente usuario)
        {
            try
            {
                if (id != usuario.Id)
                {
                    return BadRequest();
                }
                _context.Entry(usuario).State = EntityState.Modified;
                _context.Update(usuario);
                _context.SaveChanges();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ClienteController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(long id)
        {
            try
            {
                var usuario = _context.Clientes.Find(id);
                if (usuario == null)
                {
                    return NotFound();

                }
                _context.Remove(usuario);
                _context.SaveChanges();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
