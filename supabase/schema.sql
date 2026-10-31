-- Beyblade X Tracker: one table holds every saved item (players, combos, decks, matches, clips info, settings…)
-- Run this once in Supabase → SQL Editor.

create table if not exists public.docs (
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  id         text        not null,
  data       jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

-- Each signed-in Discord user can only see and change their own rows
alter table public.docs enable row level security;

drop policy if exists "docs: read own"   on public.docs;
drop policy if exists "docs: insert own" on public.docs;
drop policy if exists "docs: update own" on public.docs;
drop policy if exists "docs: delete own" on public.docs;

create policy "docs: read own"   on public.docs for select using ((select auth.uid()) = user_id);
create policy "docs: insert own" on public.docs for insert with check ((select auth.uid()) = user_id);
create policy "docs: update own" on public.docs for update using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "docs: delete own" on public.docs for delete using ((select auth.uid()) = user_id);

-- Live sync between phone and desktop
alter table public.docs replica identity full;
do $$ begin
  alter publication supabase_realtime add table public.docs;
exception when duplicate_object then null; end $$;
