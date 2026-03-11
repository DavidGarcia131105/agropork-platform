create table litters (
    id uuid primary key default gen_random_uuid(),
    mother_id uuid references animals(id),
    birth_date date,
    total_piglets int,
    created_at timestamp default now()
)