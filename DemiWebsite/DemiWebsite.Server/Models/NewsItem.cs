using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DemiWebsite.Server.Models
{
    public class NewsItem
    {
        [Key]
        [Required]
        [Column("news_id")]
        public int Id { get; set; }

        [Column("news_name")]
        [Required]
        public string Name { get; set; }

        [Column("post_date")]
        public DateTime PostDate { get; set; }

        [Column("img_url")]
        public string ImgUrl { get; set; }

        [Column("description")]
        public string Description { get; set; }
    }
}
