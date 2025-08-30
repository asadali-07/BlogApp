"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText, Image as ImageIcon, X, Camera } from "lucide-react";
import Image from "next/image";

export default function CreateBlog() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    image: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setIsUploading(true);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        setFormData((prev) => ({ ...prev, image: base64String }));
        setImagePreview(base64String);
        setIsUploading(false);
      };
      
      reader.onerror = () => {
        alert('Error reading file');
        setIsUploading(false);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/blog");
      } else {
        console.error(data.error);
        alert(data.error || "Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden py-12 sm:py-16">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 mt-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  Create New Blog Post
                </span>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                Share your thoughts and ideas with the world
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Blog Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter your blog title"
                    className="border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write a brief description of your blog post"
                    className="border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-colors min-h-[100px] resize-none"
                    required
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This will appear as a preview in blog listings
                  </p>
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    URL Slug
                  </Label>
                  <Input
                    id="slug"
                    name="slug"
                    type="text"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="url-friendly-slug"
                    className="border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    required
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Must be unique and URL-friendly.
                  </p>
                  {formData.slug && (
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        <strong>Preview URL:</strong> /blogpost/{formData.slug}
                      </p>
                    </div>
                  )}
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                    <ImageIcon className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Featured Image
                  </Label>
                  
                  {/* Upload Area */}
                  <div className="space-y-4">
                    {!imagePreview ? (
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                            <Camera className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                              Upload Featured Image
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              PNG, JPG, GIF up to 5MB
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                            className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                          >
                            {isUploading ? (
                              <div className="flex items-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                                Uploading...
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <Upload className="w-4 h-4 mr-2" />
                                Choose Image
                              </div>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      /* Image Preview */
                      <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                          src={imagePreview}
                          width={600}
                          height={400}
                          alt="Preview"
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={removeImage}
                          className="absolute top-2 right-2 w-8 h-8 p-0 rounded-full bg-red-500 hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-sm font-medium">
                            Featured Image Ready
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            className="mt-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            Change Image
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This image is main image for your blog post
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.image}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Blog Post...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Upload className="w-4 h-4 mr-2" />
                        Create Blog Post
                      </div>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/blog")}
                    className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}