using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DynamicDashboard
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblCaja6.Text = DateTime.Now.ToString("HH:mm:ss");
            }
            
        }
    
        private void UpdateTimer()
        {
            lblReloj.Text = DateTime.Now.ToLongTimeString();
        }

        protected void tmrRelojInterno_Tick1(object sender, EventArgs e)
        {
            UpdateTimer();
        }

        protected void Caja_6_Click(object sender, EventArgs e)
        {
            lblCaja6.Text = DateTime.Now.ToString("HH:mm:ss");
        }
    }
}