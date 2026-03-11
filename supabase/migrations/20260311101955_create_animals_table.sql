create table animals (
    id uuid primary key default gen_random_uuid(),
    tag_number text unique,
    breed_id uuid references breeds(id),
    sex text,
    birth_date date,
    weight numeric,
    status text,
    created_at timestamp default now()
);