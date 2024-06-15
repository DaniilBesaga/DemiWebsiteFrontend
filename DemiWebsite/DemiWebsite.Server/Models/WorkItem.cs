using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DemiWebsite.Server.Models
{
    public class WorkItem
    {
        [Key]
        [Required]
        [Column("work_id")]
        public int Id { get; set; }

        [Column("work_name")]
        [Required]
        public string Name { get; set; }

        [Column("release_date")]
        public DateTime ReleaseDate { get; set; }

        [Column("img_url")]
        public string ImgUrl { get; set; }

        [Column("trailer_url")]
        public string TrailerUrl { get; set; }

        [Column("story")]
        public string Story { get; set; }
    }
}
