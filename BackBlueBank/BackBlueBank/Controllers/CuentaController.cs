using BackBlueBank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackBlueBank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentaController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public CuentaController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<CuentaController>
        [HttpGet]
        public ActionResult Get(long id)
        {

            AplicationDbContext db = new AplicationDbContext();
            var consulta= from a in db.Cuentas
                         where a.IdClientes==id
                         select a;
            JArray listItems = new JArray();
            foreach (var a in consulta)
            {

                JObject cuentas = new JObject(
                        new JProperty("Id", a.Id),
                        new JProperty("Monto", a.Monto));
                       
                listItems.Add(cuentas);
            }
            return Content(listItems.ToString(), "application/json");
        }

        // POST api/<CuentaController>
        [HttpPost]
        public ActionResult Post(long accion, [FromBody] Cuenta cuenta)
        {
            if (accion == 0)
            {
                try
                {
                   
                    _context.Add(cuenta);
                    _context.SaveChanges();
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            else if (accion==1) 
            {
                AplicationDbContext db = new AplicationDbContext();
                var consulta = from c in db.Cuentas
                               where cuenta.Id == c.Id
                               select c;

                foreach(var c in consulta)
                {
                    cuenta.Monto = cuenta.Monto+c.Monto;
                }

                Put(cuenta.Id, cuenta);
                return Ok();
            }
            else
            {
                AplicationDbContext db = new AplicationDbContext();
                var consulta = from c in db.Cuentas
                               where cuenta.Id == c.Id
                               select c;
                long antescuent=0;
                long nueva = 0;
                foreach (var c in consulta)
                {
                    antescuent = c.Monto;
                    nueva =  c.Monto- cuenta.Monto;
                    if (nueva<0)
                    {
                        return BadRequest("Valor insuficiente");
                    }
                    else
                    {
                        cuenta.Monto = nueva;
                    }
                }

                Put(cuenta.Id, cuenta);
                return Ok();
            }

        }

        // PUT api/<CuentaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(long id, [FromBody] Cuenta cuenta)
        {
            try
            {
                if (id != cuenta.Id)
                {
                    return BadRequest();
                }
                _context.Entry(cuenta).State = EntityState.Modified;
                _context.Update(cuenta);
                _context.SaveChanges();
                return Ok(cuenta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<CuentaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(long id)
        {
            try
            {
                var cuenta = _context.Cuentas.Find(id);
                if (cuenta == null)
                {
                    return NotFound();

                }
                _context.Remove(cuenta);
                _context.SaveChanges();
                return Ok(cuenta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
