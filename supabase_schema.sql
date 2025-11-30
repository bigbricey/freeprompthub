-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create a table for saved prompts
create table saved_prompts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  prompt_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  unique(user_id, prompt_id)
);

alter table saved_prompts enable row level security;

create policy "Users can view their own saved prompts."
  on saved_prompts for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own saved prompts."
  on saved_prompts for insert
  with check ( auth.uid() = user_id );

create policy "Users can delete their own saved prompts."
  on saved_prompts for delete
  using ( auth.uid() = user_id );

-- Create a table for collections
create table collections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table collections enable row level security;

create policy "Users can view their own collections."
  on collections for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own collections."
  on collections for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own collections."
  on collections for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own collections."
  on collections for delete
  using ( auth.uid() = user_id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
