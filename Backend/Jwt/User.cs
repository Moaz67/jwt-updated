﻿using System.ComponentModel.DataAnnotations;

namespace Jwt
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime CreatedDate {get;set;}= DateTime.Now;
    }
}
