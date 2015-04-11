using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JSDemo.Startup))]
namespace JSDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
