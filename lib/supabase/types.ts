export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_roles: {
        Row: {
          id: string;
          user_id: string;
          role: "admin" | "staff" | "customer";
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role: "admin" | "staff" | "customer";
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: "admin" | "staff" | "customer";
          created_at?: string;
        };
        Relationships: [];
      };
      customer_addresses: {
        Row: {
          id: string;
          user_id: string;
          address_type: "shipping" | "billing";
          recipient_name: string;
          phone: string;
          street_address_1: string;
          street_address_2: string | null;
          landmark: string | null;
          city: string;
          state: string;
          postal_code: string;
          country: string;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          address_type?: "shipping" | "billing";
          recipient_name: string;
          phone: string;
          street_address_1: string;
          street_address_2?: string | null;
          landmark?: string | null;
          city: string;
          state: string;
          postal_code: string;
          country?: string;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          address_type?: "shipping" | "billing";
          recipient_name?: string;
          phone?: string;
          street_address_1?: string;
          street_address_2?: string | null;
          landmark?: string | null;
          city?: string;
          state?: string;
          postal_code?: string;
          country?: string;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string;
          image_url: string | null;
          icon: string | null;
          badge: string | null;
          display_order: number;
          is_active: boolean;
          is_service: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description: string;
          image_url?: string | null;
          icon?: string | null;
          badge?: string | null;
          display_order?: number;
          is_active?: boolean;
          is_service?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string;
          image_url?: string | null;
          icon?: string | null;
          badge?: string | null;
          display_order?: number;
          is_active?: boolean;
          is_service?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      subcategories: {
        Row: {
          id: string;
          category_id: string;
          slug: string;
          name: string;
          description: string | null;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          slug: string;
          name: string;
          description?: string | null;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          slug?: string;
          name?: string;
          description?: string | null;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "subcategories_category_id_fkey";
            columns: ["category_id"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
      products: {
        Row: {
          id: string;
          slug: string;
          sku: string | null;
          code: string | null;
          name: string;
          category_id: string;
          subcategory_id: string | null;
          tagline: string | null;
          short_description: string | null;
          detailed_overview: string[];
          badge: string | null;
          status: "draft" | "active" | "archived";
          is_featured: boolean;
          is_placeholder: boolean;
          base_price: number | null;
          compare_at_price: number | null;
          has_divine_offering: boolean;
          divine_offering_price: number;
          shipping_guarantee: string | null;
          rating: number;
          review_count: number;
          tags: string[];
          seo_title: string | null;
          seo_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          sku?: string | null;
          code?: string | null;
          name: string;
          category_id: string;
          subcategory_id?: string | null;
          tagline?: string | null;
          short_description?: string | null;
          detailed_overview?: string[];
          badge?: string | null;
          status?: "draft" | "active" | "archived";
          is_featured?: boolean;
          is_placeholder?: boolean;
          base_price?: number | null;
          compare_at_price?: number | null;
          has_divine_offering?: boolean;
          divine_offering_price?: number;
          shipping_guarantee?: string | null;
          rating?: number;
          review_count?: number;
          tags?: string[];
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          sku?: string | null;
          code?: string | null;
          name?: string;
          category_id?: string;
          subcategory_id?: string | null;
          tagline?: string | null;
          short_description?: string | null;
          detailed_overview?: string[];
          badge?: string | null;
          status?: "draft" | "active" | "archived";
          is_featured?: boolean;
          is_placeholder?: boolean;
          base_price?: number | null;
          compare_at_price?: number | null;
          has_divine_offering?: boolean;
          divine_offering_price?: number;
          shipping_guarantee?: string | null;
          rating?: number;
          review_count?: number;
          tags?: string[];
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey";
            columns: ["category_id"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_subcategory_id_fkey";
            columns: ["subcategory_id"];
            referencedRelation: "subcategories";
            referencedColumns: ["id"];
          },
        ];
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          variant_key: string;
          sku: string | null;
          name: string;
          price: number;
          mrp: number;
          badge: string | null;
          suitable_for: string | null;
          description: string | null;
          key_highlights: string[];
          divine_offering_option: string | null;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          variant_key: string;
          sku?: string | null;
          name: string;
          price: number;
          mrp: number;
          badge?: string | null;
          suitable_for?: string | null;
          description?: string | null;
          key_highlights?: string[];
          divine_offering_option?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          variant_key?: string;
          sku?: string | null;
          name?: string;
          price?: number;
          mrp?: number;
          badge?: string | null;
          suitable_for?: string | null;
          description?: string | null;
          key_highlights?: string[];
          divine_offering_option?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      product_images: {
        Row: {
          id: string;
          product_id: string;
          variant_id: string | null;
          storage_path: string;
          alt_text: string | null;
          display_order: number;
          is_primary: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          variant_id?: string | null;
          storage_path: string;
          alt_text?: string | null;
          display_order?: number;
          is_primary?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          variant_id?: string | null;
          storage_path?: string;
          alt_text?: string | null;
          display_order?: number;
          is_primary?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      product_specifications: {
        Row: {
          id: string;
          product_id: string;
          group_name: string;
          label: string;
          value: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          group_name: string;
          label: string;
          value: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          group_name?: string;
          label?: string;
          value?: string;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_specifications_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      product_faqs: {
        Row: {
          id: string;
          product_id: string;
          question: string;
          answer: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          question: string;
          answer: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          question?: string;
          answer?: string;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_faqs_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      variant_samagri_items: {
        Row: {
          id: string;
          variant_id: string;
          category_name: string;
          item_name: string;
          quantity: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          variant_id: string;
          category_name: string;
          item_name: string;
          quantity: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          variant_id?: string;
          category_name?: string;
          item_name?: string;
          quantity?: string;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "variant_samagri_items_variant_id_fkey";
            columns: ["variant_id"];
            referencedRelation: "product_variants";
            referencedColumns: ["id"];
          },
        ];
      };
      inventory_items: {
        Row: {
          id: string;
          variant_id: string;
          stock_quantity: number;
          reserved_quantity: number;
          low_stock_threshold: number;
          allow_backorder: boolean;
          updated_at: string;
        };
        Insert: {
          id?: string;
          variant_id: string;
          stock_quantity?: number;
          reserved_quantity?: number;
          low_stock_threshold?: number;
          allow_backorder?: boolean;
          updated_at?: string;
        };
        Update: {
          id?: string;
          variant_id?: string;
          stock_quantity?: number;
          reserved_quantity?: number;
          low_stock_threshold?: number;
          allow_backorder?: boolean;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "inventory_items_variant_id_fkey";
            columns: ["variant_id"];
            referencedRelation: "product_variants";
            referencedColumns: ["id"];
          },
        ];
      };
      orders: {
        Row: {
          id: string;
          idempotency_key: string | null;
          order_number: string;
          user_id: string | null;
          customer_email: string;
          customer_phone: string;
          status:
            | "pending_payment"
            | "confirmed"
            | "processing"
            | "shipped"
            | "delivered"
            | "cancelled_expired"
            | "payment_failed"
            | "refunded";
          currency: string;
          subtotal: number;
          discount_total: number;
          shipping_fee: number;
          tax_total: number;
          grand_total: number;
          shipping_address: Json;
          billing_address: Json | null;
          shipping_carrier: string | null;
          tracking_number: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          idempotency_key?: string | null;
          order_number: string;
          user_id?: string | null;
          customer_email: string;
          customer_phone: string;
          status?:
            | "pending_payment"
            | "confirmed"
            | "processing"
            | "shipped"
            | "delivered"
            | "cancelled_expired"
            | "payment_failed"
            | "refunded";
          currency?: string;
          subtotal: number;
          discount_total?: number;
          shipping_fee?: number;
          tax_total?: number;
          grand_total: number;
          shipping_address: Json;
          billing_address?: Json | null;
          shipping_carrier?: string | null;
          tracking_number?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          idempotency_key?: string | null;
          order_number?: string;
          user_id?: string | null;
          customer_email?: string;
          customer_phone?: string;
          status?:
            | "pending_payment"
            | "confirmed"
            | "processing"
            | "shipped"
            | "delivered"
            | "cancelled_expired"
            | "payment_failed"
            | "refunded";
          currency?: string;
          subtotal?: number;
          discount_total?: number;
          shipping_fee?: number;
          tax_total?: number;
          grand_total?: number;
          shipping_address?: Json;
          billing_address?: Json | null;
          shipping_carrier?: string | null;
          tracking_number?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          variant_id: string | null;
          product_name: string;
          variant_name: string;
          sku: string | null;
          image_url: string | null;
          unit_price: number;
          unit_mrp: number;
          quantity: number;
          total_price: number;
          divine_offering_selected: boolean;
          divine_offering_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          variant_id?: string | null;
          product_name: string;
          variant_name: string;
          sku?: string | null;
          image_url?: string | null;
          unit_price: number;
          unit_mrp: number;
          quantity: number;
          total_price: number;
          divine_offering_selected?: boolean;
          divine_offering_price?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string | null;
          variant_id?: string | null;
          product_name?: string;
          variant_name?: string;
          sku?: string | null;
          image_url?: string | null;
          unit_price?: number;
          unit_mrp?: number;
          quantity?: number;
          total_price?: number;
          divine_offering_selected?: boolean;
          divine_offering_price?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
        ];
      };
      payments: {
        Row: {
          id: string;
          order_id: string;
          gateway: "razorpay" | "cod" | "manual";
          gateway_order_id: string | null;
          gateway_payment_id: string | null;
          gateway_signature: string | null;
          amount: number;
          currency: string;
          status: "pending" | "authorized" | "paid" | "failed" | "cancelled" | "refunded";
          error_message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          gateway: "razorpay" | "cod" | "manual";
          gateway_order_id?: string | null;
          gateway_payment_id?: string | null;
          gateway_signature?: string | null;
          amount: number;
          currency?: string;
          status?: "pending" | "authorized" | "paid" | "failed" | "cancelled" | "refunded";
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          gateway?: "razorpay" | "cod" | "manual";
          gateway_order_id?: string | null;
          gateway_payment_id?: string | null;
          gateway_signature?: string | null;
          amount?: number;
          currency?: string;
          status?: "pending" | "authorized" | "paid" | "failed" | "cancelled" | "refunded";
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
        ];
      };
      coupons: {
        Row: {
          id: string;
          code: string;
          description: string | null;
          discount_type: "percentage" | "fixed_amount";
          discount_value: number;
          min_order_value: number;
          max_discount_cap: number | null;
          usage_limit_total: number | null;
          usage_limit_per_user: number;
          times_used: number;
          starts_at: string | null;
          expires_at: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          description?: string | null;
          discount_type: "percentage" | "fixed_amount";
          discount_value: number;
          min_order_value?: number;
          max_discount_cap?: number | null;
          usage_limit_total?: number | null;
          usage_limit_per_user?: number;
          times_used?: number;
          starts_at?: string | null;
          expires_at?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          code?: string;
          description?: string | null;
          discount_type?: "percentage" | "fixed_amount";
          discount_value?: number;
          min_order_value?: number;
          max_discount_cap?: number | null;
          usage_limit_total?: number | null;
          usage_limit_per_user?: number;
          times_used?: number;
          starts_at?: string | null;
          expires_at?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      coupon_usages: {
        Row: {
          id: string;
          coupon_id: string;
          order_id: string;
          user_id: string | null;
          discount_amount: number;
          used_at: string;
        };
        Insert: {
          id?: string;
          coupon_id: string;
          order_id: string;
          user_id?: string | null;
          discount_amount: number;
          used_at?: string;
        };
        Update: {
          id?: string;
          coupon_id?: string;
          order_id?: string;
          user_id?: string | null;
          discount_amount?: number;
          used_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "coupon_usages_coupon_id_fkey";
            columns: ["coupon_id"];
            referencedRelation: "coupons";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "coupon_usages_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
        ];
      };
      puja_services: {
        Row: {
          id: string;
          slug: string;
          code: string;
          name: string;
          tagline: string | null;
          description: string | null;
          detailed_overview: string[];
          location_mode: string;
          duration: string;
          starting_price: number;
          mrp: number;
          prasad_delivery: string;
          badge: string | null;
          image_url: string | null;
          priest_count: string | null;
          sankalp_type: string | null;
          included_items: string[];
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          code: string;
          name: string;
          tagline?: string | null;
          description?: string | null;
          detailed_overview?: string[];
          location_mode?: string;
          duration?: string;
          starting_price: number;
          mrp: number;
          prasad_delivery?: string;
          badge?: string | null;
          image_url?: string | null;
          priest_count?: string | null;
          sankalp_type?: string | null;
          included_items?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          code?: string;
          name?: string;
          tagline?: string | null;
          description?: string | null;
          detailed_overview?: string[];
          location_mode?: string;
          duration?: string;
          starting_price?: number;
          mrp?: number;
          prasad_delivery?: string;
          badge?: string | null;
          image_url?: string | null;
          priest_count?: string | null;
          sankalp_type?: string | null;
          included_items?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      puja_service_faqs: {
        Row: {
          id: string;
          service_id: string;
          question: string;
          answer: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          service_id: string;
          question: string;
          answer: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          service_id?: string;
          question?: string;
          answer?: string;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "puja_service_faqs_service_id_fkey";
            columns: ["service_id"];
            referencedRelation: "puja_services";
            referencedColumns: ["id"];
          },
        ];
      };
      puja_service_bookings: {
        Row: {
          id: string;
          booking_number: string;
          service_id: string;
          user_id: string | null;
          order_id: string | null;
          devotee_name: string;
          gotra: string | null;
          rashi: string | null;
          nakshatra: string | null;
          sankalp_purpose: string;
          preferred_date: string;
          status:
            | "pending"
            | "confirmed"
            | "scheduled"
            | "performed"
            | "prasad_dispatched"
            | "completed"
            | "cancelled";
          price_paid: number;
          video_recording_url: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          booking_number: string;
          service_id: string;
          user_id?: string | null;
          order_id?: string | null;
          devotee_name: string;
          gotra?: string | null;
          rashi?: string | null;
          nakshatra?: string | null;
          sankalp_purpose: string;
          preferred_date: string;
          status?:
            | "pending"
            | "confirmed"
            | "scheduled"
            | "performed"
            | "prasad_dispatched"
            | "completed"
            | "cancelled";
          price_paid: number;
          video_recording_url?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          booking_number?: string;
          service_id?: string;
          user_id?: string | null;
          order_id?: string | null;
          devotee_name?: string;
          gotra?: string | null;
          rashi?: string | null;
          nakshatra?: string | null;
          sankalp_purpose?: string;
          preferred_date?: string;
          status?:
            | "pending"
            | "confirmed"
            | "scheduled"
            | "performed"
            | "prasad_dispatched"
            | "completed"
            | "cancelled";
          price_paid?: number;
          video_recording_url?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "puja_service_bookings_service_id_fkey";
            columns: ["service_id"];
            referencedRelation: "puja_services";
            referencedColumns: ["id"];
          },
        ];
      };
      reviews: {
        Row: {
          id: string;
          product_id: string | null;
          service_id: string | null;
          user_id: string | null;
          author_name: string;
          location: string | null;
          rating: number;
          title: string;
          comment: string;
          is_verified_purchase: boolean;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id?: string | null;
          service_id?: string | null;
          user_id?: string | null;
          author_name: string;
          location?: string | null;
          rating: number;
          title: string;
          comment: string;
          is_verified_purchase?: boolean;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string | null;
          service_id?: string | null;
          user_id?: string | null;
          author_name?: string;
          location?: string | null;
          rating?: number;
          title?: string;
          comment?: string;
          is_verified_purchase?: boolean;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reviews_service_id_fkey";
            columns: ["service_id"];
            referencedRelation: "puja_services";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      calculate_shipping: {
        Args: {
          p_subtotal: number;
          p_shipping_address: Json;
        };
        Returns: number;
      };
      validate_and_apply_coupon: {
        Args: {
          p_code: string;
          p_user_id: string | null;
          p_subtotal: number;
        };
        Returns: {
          coupon_id: string;
          discount_amount: number;
        }[];
      };
      create_checkout_order: {
        Args: {
          p_idempotency_key: string;
          p_items: Json;
          p_customer_email: string;
          p_customer_phone: string;
          p_shipping_address: Json;
          p_billing_address: Json;
          p_coupon_code?: string | null;
          p_payment_gateway?: string;
        };
        Returns: Json;
      };
      release_order_inventory: {
        Args: {
          p_order_id: string;
          p_reason?: string;
        };
        Returns: boolean;
      };
      expire_stale_pending_orders: {
        Args: {
          p_ttl_minutes?: number;
        };
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
