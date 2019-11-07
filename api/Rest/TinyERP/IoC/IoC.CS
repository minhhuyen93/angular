namespace TinyERP.IoC
{
    public class IoC
    {
        public static IBaseContainer Container;
        public IoC()
        {
            IoC.Container = new BaseContainer();
        }
    }
}
