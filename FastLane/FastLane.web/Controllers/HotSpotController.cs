using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FastLane.web.Controllers
{
    [RoutePrefix("hotspot")]
    public class HotspotController : Controller
    {
        // GET: HotSpot
        public ActionResult Index()
        {
            return View();
        }
    }
}