###########################################
# Terraform: Provision Docker Container
###########################################

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
  required_version = ">= 1.6.0"
}

# Configure Docker provider
provider "docker" {}

# Create a Docker image resource (pulls Nginx)
resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

# Create a container from that image
resource "docker_container" "nginx_container" {
  name  = "terraform-nginx"
  image = docker_image.nginx.image_id
  ports {
    internal = 80
    external = 8080
  }
}
