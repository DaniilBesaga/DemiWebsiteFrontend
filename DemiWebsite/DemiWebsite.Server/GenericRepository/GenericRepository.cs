using DemiWebsite.Server.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Numerics;

namespace DemiWebsite.Server.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DatabaseContext _context = null;

        private DbSet<T> dbSet = null;
        public IConfiguration Configuration { get; }

        public GenericRepository()
        {
            _context = new DatabaseContext();
            dbSet = _context.Set<T>();
        }

        public GenericRepository(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            dbSet = _context.Set<T>();
            Configuration = configuration;
        }

        public async Task DeleteAsync(object id)
        {
            var entity = await dbSet.FindAsync(id);
            if (_context.Entry(entity).State == EntityState.Detached)
            {
                dbSet.Attach(entity);
            }
            dbSet.Remove(entity);
            //await SaveAsync(); 
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbSet
                .ToListAsync();
        }

        public async Task<T> GetByIdAsync(object id)
        {
            var result = await dbSet.FindAsync(id);
            return result;
        }

        public async Task InsertAsync(T entity)
        {
            dbSet.Add(entity);
            //await SaveAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            //await SaveAsync();
        }
    }
}
