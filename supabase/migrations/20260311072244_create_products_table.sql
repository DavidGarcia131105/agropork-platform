create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric not null,
  stock int default 0,
  category_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  constraint fk_category
    foreign key (category_id)
    references categories(id)
    on delete set null
);

alter table products enable row level security;

create policy "Public read products"
on products
for select
using (true);