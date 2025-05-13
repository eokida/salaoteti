using Microsoft.EntityFrameworkCore;
using SalaoTeti.Models;

namespace SalaoTeti.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cliente>()
                .Property(p => p.Nome);

            modelBuilder.Entity<Cliente>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
